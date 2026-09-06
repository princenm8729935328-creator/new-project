/**
 * Measured quantities.
 *
 * Numbers in science come with an uncertainty and a provenance. Storing them as
 * structured data (rather than baked into prose) means the same value can be
 * rendered in a panel, a chart axis and a comparison widget without ever being
 * retyped — and a revised measurement is a one-line change.
 */
import type { ReferenceId } from './reference';

export interface Uncertainty {
  /** Symmetric 1-sigma uncertainty, in the same unit as `value`. */
  readonly plusMinus?: number;
  /** Asymmetric uncertainties, in the same unit as `value`. */
  readonly plus?: number;
  readonly minus?: number;
  /** Set when the number is a bound rather than a measurement. */
  readonly kind?: 'upper-limit' | 'lower-limit' | 'order-of-magnitude';
}

export interface Quantity {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  /** Unit string as displayed, e.g. "Gyr", "km/s/Mpc", "kg". */
  readonly unit: string;
  readonly uncertainty?: Uncertainty;
  /**
   * Why this number is what it is — e.g. the survey, the model assumed. Shown
   * in the quantity's detail popover, because a value without its context can
   * be quietly wrong.
   */
  readonly context?: string;
  readonly references: readonly ReferenceId[];
}

/** "13.787 ± 0.020 Gyr" — display string for a quantity. */
export function formatQuantity(quantity: Quantity): string {
  const { value, unit, uncertainty } = quantity;
  let text = String(value);
  if (uncertainty?.plusMinus !== undefined) {
    text += ` ± ${uncertainty.plusMinus}`;
  } else if (uncertainty?.plus !== undefined || uncertainty?.minus !== undefined) {
    text += ` +${uncertainty.plus ?? 0}/−${uncertainty.minus ?? 0}`;
  }
  if (uncertainty?.kind === 'upper-limit') text = `< ${text}`;
  if (uncertainty?.kind === 'lower-limit') text = `> ${text}`;
  if (uncertainty?.kind === 'order-of-magnitude') text = `~ ${text}`;
  return unit ? `${text} ${unit}` : text;
}
