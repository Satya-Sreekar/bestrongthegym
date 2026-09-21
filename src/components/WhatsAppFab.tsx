import { MessageCircle } from 'lucide-react'
import { TRIAL } from '../data'

export default function WhatsAppFab() {
  return (
    <a className="fab" href={TRIAL} aria-label="Message us on WhatsApp">
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}
