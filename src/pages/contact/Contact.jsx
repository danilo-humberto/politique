import { Undo2 } from "lucide-react"
import './Contact.css'
import StatsOverview from "../../components/statsOverview/StatsOverview"

const Contact = () => {
  return (
    <section className="flex">
        <div className="contact-header">
          <h2>Contatos</h2>
          <div className="div-icon-back"><Undo2 strokeWidth={1.5} /></div>
        </div>
        <StatsOverview />
    </section>
  )
}

export default Contact
