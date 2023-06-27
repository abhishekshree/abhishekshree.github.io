import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Work({ posts }) {
  return (
    <>
      <PageSEO
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
                  <time>May, 2023 - Present</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <div className="text-gray-900 dark:text-gray-100">Quantitative Technology Intern</div>
                    </h2>
                    <div className="flex flex-wrap">Qube Research & Technologies</div>
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                    <ul>
                      <li>Building latency sensative software for the hedge fund</li>
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
                  <time>August, 2022 - March, 2023</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <div className="text-gray-900 dark:text-gray-100">
                        Graduate Product Engineer
                      </div>
                    </h2>
                    <div className="flex flex-wrap">paradime.io </div> {/*🚀*/}
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                    <ul>
                      <li>Built new infratructure and contributed to better DevOps practices</li>
                      <li>
                        Built Kubernetes Vulnerability Scanner for automated weekly vulnerability
                        assessments using tools including Trivy, Kubeaudit, and Kube_bench, deployed
                        to airflow. Developed a way to securely connect to the production clusters.
                      </li>
                      <li>
                        Implemented a web-based Kubernetes user interface with multiple-level role
                        access, attached a Tailscale sidecar for the interface to be accessible just
                        via internal VPN using Terraform
                      </li>
                      <li>
                        Implemented alarms for failed Kubernetes nodes (failing status check) in
                        ASG(auto-scaling groups) and per node
                      </li>
                      <li>Built a new monitoring infrastructure:</li>
                    </ul>
                    <div className="pl-4">
                      <ol className="list-inside list-none">
                        <li>
                          Installed cluster-level Prometheus instances, AWS-managed Grafana, and
                          Prometheus (AMP), using Terraform
                        </li>
                        <li>
                          Built a pipeline to transfer data related to metrics from cluster-level
                          Prometheus instances to AWS-managed Prometheus instance, utilized those to
                          generate dashboards in Grafana using AMP as the primary data source using
                          Terraform and Helm
                        </li>
                        <li>
                          Built custom dashboards to generate meaningful insights from the collected
                          metrics
                        </li>
                      </ol>
                    </div>
                    <ul>
                      <li>Worked on adding support for Hightouch integration in the Paradime Ecosystem</li>
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
                  <time>March, 2022 - June, 2022</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <div className="text-gray-900 dark:text-gray-100">Product Engineer</div>
                    </h2>
                    <div className="flex flex-wrap">Students’ Placement Office</div>
                  </div>
                  <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                    <ul>
                      <li>
                        Created Recruitment Automation System for use in IITK by about 500 companies
                        and 1700 students in the coming recruitment phase this year.
                      </li>
                      <li>
                        Enhanced security and achieved an improvement in response time by
                        approximately 60%.
                      </li>
                      <li>Spearheaded a team of 2 Lead and 6 Junior developers</li>
                      <li>
                        Designed and built a microservice based backend with more than 150 endpoints
                        in Go including context models, an async mailing system, a Content Delivery
                        System.
                      </li>
                      <li>
                        Built a responsive frontend in Next.js, with features including type-based
                        API calls, notifications, data filtering, a persistent store, Lazy Loading,
                        page-level auth and RTE.
                      </li>
                      <li>
                        Ideated and wrote CI/CD pipeline for smooth deployment, orchestrated using
                        Nginx and Docker.
                      </li>
                      <li>
                        Details about the solution architecture are available{' '}
                        <Link href={`/blog/engineering-ras`}>here</Link>.
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
                  <time>May, 2022 - April, 2023</time>
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
                        Leading a team of 50+ undergraduates to participate in international marine
                        robotics competitions like RoboSub 2023
                      </li>
                      <li>
                        Responsible for improving the software stack and design of our 3rd
                        generation AUV-Tarang
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
                  <time>March, 2022 - April, 2023</time>
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
                      <li>Leading a team of 5 Web Executives.</li>
                      <li>
                        Maintaining the organization’s servers and VM, designed new infrastructure
                        including the website, CDN, and portals
                      </li>
                      <li>
                        Solved critical networking challenges while various deployments within IITK
                        and SPO internal networks
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
                  <time>April, 2021 - Present</time>
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
                      <li>
                        Improved the team website, which ranked 3rd amongst 52 participating teams
                        in Robosub, 2021, the largest competition for student-built AUVs in the
                        world
                      </li>
                      <li>
                        Utilized Extended Kalman Filters based SLAM algorithm to enhance pose
                        estimation and navigation
                      </li>
                      <li>
                        Implemented and researched the efficiency of graph-based, probabilistic, and
                        deep learning-based SLAM algorithms like FastSLAM and RatSLAM in underwater
                        conditions
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
                  <time>September, 2021 - April, 2022</time>
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
                        club
                      </li>
                      <li>
                        Wrote a multi-part blog series aimed as an explainer about the various
                        low-level components of a Linux Distribution (Linux Demystified)
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
