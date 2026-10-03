/**
 * Lead tracking.
 *
 * No analytics product is installed on this site. This helper pushes a clean
 * event into `window.dataLayer` when one exists, and does nothing when it does
 * not, so adding Google Tag Manager or GA4 later needs no code changes here.
 *
 * It records only which button was pressed. No personal data is collected.
 */

export type TrackEvent =
  | 'whatsapp_general_click'
  | 'whatsapp_membership_click'
  | 'whatsapp_personal_training_click'
  | 'whatsapp_womens_personal_training_click'
  | 'whatsapp_couple_offer_click'
  | 'whatsapp_visit_click'
  | 'whatsapp_service_click'
  | 'whatsapp_fitpass_click'
  | 'whatsapp_app_click'
  | 'phone_click'
  | 'directions_click'
  | 'app_download_click'
  | 'instagram_click'
  | 'reviews_click'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function track(event: TrackEvent, detail?: string) {
  try {
    window.dataLayer?.push(detail ? { event, detail } : { event })
  } catch {
    /* analytics must never break the page */
  }
}
