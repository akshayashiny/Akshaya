import './edu.css'
import { motion } from 'framer-motion'

const bentoItems = [
  {
    title: 'B.Tech Computer Science',
    subtitle: 'SRM AP University',
    desc: '2019 - 2023 | CGPA: 9.1',
    className: 'large one',
  },
  {
    title: '12th Grade',
    subtitle: 'ABC School',
    desc: '2017 - 2019 | 95%',
    className: 'two',
  },
  {
    title: '10th Grade',
    subtitle: 'ABC School',
    desc: '2015 - 2017 | 10 CGPA',
    className: 'three',
  },
  {
    title: 'Certifications',
    subtitle: 'Coursera, Udemy',
    desc: 'AI, Web, Cloud',
    className: 'four',
  },
  {
    title: 'Hackathons',
    subtitle: 'National Finalist',
    desc: 'Smart India Hackathon',
    className: 'five',
  },
]

function Education() {
  return (
    <div className="edu">
      {bentoItems.map((item, i) => (
        <motion.div
          className={`bento-item${item.className ? ' ' + item.className : ''}`}
          key={i}
          whileHover={{translateY:'-15px', boxShadow: '0 8px 42px rgba(0,0,0,0.25)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: i * 0.005 }}
        >
          <div style={{ fontWeight: 700, fontSize: '1.3em', marginBottom: 8 ,fontFamily:'calibri'}}>{item.title}</div>
          <div className='dis' style={{ fontWeight: 500, opacity: 0.8, marginBottom: 4 }}>{item.subtitle}</div>
          <div  className='dis'style={{ fontSize: '0.95em', opacity: 0.7 }}>{item.desc}</div>
        </motion.div>
      ))}
    </div>
  )
}
export default Education;