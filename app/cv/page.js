import { redirect } from 'next/navigation'

export default function CV() {
  redirect('/static/cv/cv.pdf')
}