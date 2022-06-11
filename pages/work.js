import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function Work({ posts }) {
  return (
    <>
      <PageSeo
        title={`Work - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/work`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Work
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Contributed some bits to the following organizations.
          </p>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <article className="py-4">
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time>May, 2022 ‑ Present</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <div className="text-gray-900 dark:text-gray-100">Team Head, AUV-IITK</div>
                    </h2>
                    <div className="flex flex-wrap">IIT Kanpur</div>
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                    <ul>
                      <li>
                        Leading a team of 50+ undergraduates working in the field of marine
                        robotics.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="py-4">
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time>March, 2022 ‑ Present</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <div className="text-gray-900 dark:text-gray-100">
                        Web Head, Students’ Placement Office
                      </div>
                    </h2>
                    <div className="flex flex-wrap">IIT Kanpur</div>
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                    <ul>
                      <li>
                        Leading a team of 6 Web Executives and Volunteers to work on the web stack
                        at Students’ Placement Office (SPO).
                      </li>
                      <li>Creation of a new website for SPO in Next.js.</li>
                      <li>
                        Ran performance tests on the current Recruitment Portal. Identified
                        vulnerabilities and shortcomings in the backend of the portal.
                      </li>
                      <li>
                        Designing the architecture of a New Recruitment Portal for SPO with the
                        backend based on microservices pattern orchestrated using Kubernetes and the
                        frontend in Next.js.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="py-4">
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time>April, 2021 ‑ Present</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <div className="text-gray-900 dark:text-gray-100">Team Member, AUV-IITK</div>
                    </h2>
                    <div className="flex flex-wrap">IIT Kanpur</div>
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                    <ul>
                      <li>Improved the team website, which ranked 3rd in Robosub, 2021.</li>
                      <li>
                        Implemented Kalman filters based localisation technique to solve the SLAM
                        problem, integrated the algorithm with ROS to work with real world data.
                      </li>
                      <li>
                        Worked on Monte Carlo Markov Chain methods, Neural Networks and Biomimicry
                        to implement algorithms for robot mapping like FastSLAM, RatSLAM, and
                        BioSLAM.
                      </li>
                      <li>
                        Researched for methods to test the FastSLAM algorithm in underwater
                        conditions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="py-4">
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time>September, 2021 ‑ April, 2022</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <div className="text-gray-900 dark:text-gray-100">
                        Secretary, Programming Club
                      </div>
                    </h2>
                    <div className="flex flex-wrap">IIT Kanpur</div>
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                    <ul>
                      <li>
                        Among the 25 selected secretaries responsible for various activities of the
                        club.
                      </li>
                      <li>
                        Wrote a multi‑part blog series aimed as an explainer about the various
                        low‑level components of a Linux Distribution (Linux Demystified).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
