import fs from 'fs'
import path from 'path'

export async function getServerSideProps(context) {
  try {
    // Get the absolute path to your PDF file
    const pdfPath = path.join(process.cwd(), 'static', 'cv', 'cv.pdf')

    // Read the PDF file
    const pdfBuffer = fs.readFileSync(pdfPath)

    // Set the appropriate headers for serving the PDF
    context.res.setHeader('Content-Type', 'application/pdf')
    context.res.setHeader('Content-Disposition', 'inline; filename=cv.pdf')

    // Send the PDF buffer as the response
    context.res.statusCode = 200
    context.res.end(pdfBuffer)
  } catch (error) {
    console.error('Error serving CV:', error)
    context.res.statusCode = 500
    context.res.end()
  }

  return {
    props: {},
  }
}

export default function cv() {
  // This component doesn't need to do anything
  return null
}
