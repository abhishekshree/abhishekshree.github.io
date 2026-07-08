import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

const workExperience = [
  {
    company: 'Qube Research & Technologies',
    dates: 'May 2023 - Present',
    roles: [
      {
        role: 'Quantitative Technologist',
        dates: 'Jun 2024 - Present',
        current: true,
        description: [
          'Building proprietary low-latency algorithmic trading infrastructure, mostly in Rust.'
        ],
        tags: ['Rust', 'Python', 'Quantitative Systems', 'Low Latency']
      },
      {
        role: 'Quantitative Technology Intern',
        dates: 'May 2023 - Jul 2023',
        current: false,
        description: [
          'Building latency sensitive software for the hedge fund.'
        ],
        tags: ['C++', 'Low Latency', 'Systems Programming', 'Hedge Fund']
      }
    ]
  },
  {
    company: 'WorldQuant',
    dates: 'Nov 2023 - May 2024',
    roles: [
      {
        role: 'Research Consultant',
        dates: 'Nov 2023 - May 2024',
        current: false,
        description: [
          'Built signals around some themes I found interesting, alt, news, etc.',
          'Some alphas reached to a pretty decent sharpe and made sense to me statistically, about why they worked at that time.',
          'Wrote an automation based on genetic algorithms and clustering ideas to speed up idea generation.'
        ],
        tags: ['Python', 'Genetic Algorithms', 'Clustering', 'Alpha Research', 'Data Analysis']
      }
    ]
  },
  {
    company: 'paradime.io',
    dates: 'Aug 2022 - Mar 2023',
    roles: [
      {
        role: 'Graduate Product Engineer',
        dates: 'Aug 2022 - Mar 2023',
        current: false,
        description: [
          'Built Kubernetes Vulnerability Scanner for automated weekly vulnerability assessments using tools including Trivy, Kubeaudit, and Kube_bench, deployed to airflow. Developed a way to securely connect to the production clusters.',
          'Implemented a web-based Kubernetes user interface with multiple-level role access, attached a Tailscale sidecar for the interface to be accessible just via internal VPN using Terraform.',
          'Implemented alarms for failed Kubernetes nodes (failing status check) in ASG (auto-scaling groups) and per node.',
          'Built new monitoring infrastructure: installed cluster-level Prometheus instances, AWS-managed Grafana, and Prometheus (AMP) using Terraform.',
          'Built a pipeline to transfer data related to metrics from cluster-level Prometheus instances to AWS-managed Prometheus instance, utilized those to generate dashboards in Grafana using AMP as the primary data source using Terraform and Helm.',
          'Built custom dashboards to generate meaningful insights from the collected metrics.',
          'Worked on adding support for Hightouch integration in the Paradime Ecosystem.'
        ],
        tags: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'AWS', 'Airflow', 'Helm', 'Tailscale', 'DevOps']
      }
    ]
  },
  {
    company: 'Students’ Placement Office, IIT Kanpur',
    dates: 'Mar 2022 - Apr 2023',
    roles: [
      {
        role: 'Web Head, Students’ Placement Office',
        dates: 'Mar 2022 - Apr 2023',
        current: false,
        description: [
          'Leading a team of 5 Web Executives.',
          'Maintaining the organization’s servers and VM, designed new infrastructure including the website, CDN, and portals.',
          'Solved critical networking challenges while various deployments within IITK and SPO internal networks.'
        ],
        tags: ['Linux', 'Nginx', 'System Administration', 'Network Engineering']
      },
      {
        role: 'Product Engineer',
        dates: 'Mar 2022 - Jun 2022',
        current: false,
        description: [
          'Created Recruitment Automation System for use in IITK by about 500 companies and 1700 students in the coming recruitment phase this year.',
          'Enhanced security and achieved an improvement in response time by approximately 60%.',
          'Spearheaded a team of 2 Lead and 6 Junior developers.',
          'Designed and built a microservice based backend with more than 150 endpoints in Go including context models, an async mailing system, a Content Delivery System.',
          'Built a responsive frontend in Next.js, with features including type-based API calls, notifications, data filtering, a persistent store, Lazy Loading, page-level auth and RTE.'
        ],
        tags: ['Go', 'Next.js', 'Nginx', 'Docker', 'Microservices', 'CI/CD', 'SQL'],
        blogLink: '/blog/engineering-ras'
      }
    ]
  },
  {
    company: 'IIT Kanpur',
    dates: 'Apr 2021 - Apr 2023',
    roles: [
      {
        role: 'Team Head, AUV-IITK',
        dates: 'May 2022 - Apr 2023',
        current: false,
        description: [
          'Leading a team of 50+ undergraduates to participate in international marine robotics competitions like RoboSub 2023.',
          'Responsible for improving the software stack and design of our 3rd generation AUV-Tarang.'
        ],
        tags: ['Robotics', 'C++', 'ROS', 'Systems Engineering', 'Leadership']
      },
      {
        role: 'Team Member, AUV-IITK',
        dates: 'Apr 2021 - Apr 2023',
        current: false,
        description: [
          'Improved the team website, which ranked 3rd amongst 52 participating teams in Robosub, 2021, the largest competition for student-built AUVs in the world.',
          'Utilized Extended Kalman Filters based SLAM algorithm to enhance pose estimation and navigation.',
          'Implemented and researched the efficiency of graph-based, probabilistic, and deep learning-based SLAM algorithms like FastSLAM and RatSLAM in underwater conditions.'
        ],
        tags: ['SLAM', 'Kalman Filters', 'Python', 'Computer Vision', 'Robotics']
      },
      {
        role: 'Secretary, Programming Club',
        dates: 'Sep 2021 - Apr 2022',
        current: false,
        description: [
          'Among the 25 selected secretaries responsible for various activities of the club.',
          'Wrote a multi-part blog series aimed as an explainer about the various low-level components of a Linux Distribution (Linux Demystified).'
        ],
        tags: ['Linux', 'Bash', 'Community', 'Technical Writing']
      }
    ]
  }
]

export default function Work() {
  // Flattening grouped experiences into individual timeline items for simple, linear rendering
  const timelineItems = []
  workExperience.forEach((firm) => {
    // Add firm header node
    timelineItems.push({
      type: 'company',
      company: firm.company,
      dates: firm.dates,
      current: firm.roles.some((r) => r.current),
    })

    // Add roles
    firm.roles.forEach((role) => {
      timelineItems.push({
        type: 'role',
        company: firm.company,
        ...role,
      })
    })
  })

  return (
    <>
      <PageSEO
        title={`Work - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/work`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl mono font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Work
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Contributed some bits to the following organizations.
          </p>
        </div>

        <div className="py-12 max-w-none">
          <div className="flex flex-col">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6 group">
                {/* Column 1: Date (Desktop only, right-aligned) */}
                <div className="hidden sm:block w-[180px] text-right text-xs font-mono text-gray-450 dark:text-gray-500 pt-[5px] shrink-0">
                  {item.dates.endsWith('Present') ? `${item.dates}\u00a0` : item.dates}
                </div>

                {/* Column 2: Vertical Line & Center Dot (Desktop only) */}
                <div className="hidden sm:flex relative w-6 shrink-0 justify-center">
                  {/* Vertical line segment (stops at the center of the first/last dots at 12px) */}
                  {idx === 0 ? (
                    <div className="w-0.5 bg-gray-200 dark:bg-gray-800 absolute left-1/2 transform -translate-x-1/2 top-[12px] bottom-0" />
                  ) : idx === timelineItems.length - 1 ? (
                    <div className="w-0.5 bg-gray-200 dark:bg-gray-800 absolute left-1/2 transform -translate-x-1/2 top-0 h-[12px]" />
                  ) : (
                    <div className="w-0.5 bg-gray-200 dark:bg-gray-800 absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0" />
                  )}

                  {/* Dot container */}
                  {item.type === 'company' ? (
                    item.current ? (
                      <div className="absolute top-[7px] h-3 w-3 rounded-full bg-green-500 left-1/2 transform -translate-x-1/2 ring-4 ring-green-500/25 dark:ring-green-500/30 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500 border border-white dark:border-gray-950"></span>
                      </div>
                    ) : (
                      <div className="absolute top-[5px] h-4 w-4 rounded-full border-4 border-gray-100 bg-blue-500 dark:border-gray-900 dark:bg-blue-400 left-1/2 transform -translate-x-1/2 transition-transform duration-200 group-hover:scale-110" />
                    )
                  ) : item.current ? (
                    <div className="absolute top-[7px] h-3 w-3 rounded-full bg-green-500 left-1/2 transform -translate-x-1/2 ring-4 ring-green-500/25 dark:ring-green-500/30 flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </div>
                  ) : (
                    <div className="absolute top-[8px] h-2 w-2 rounded-full border-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 left-1/2 transform -translate-x-1/2 transition-colors duration-200 group-hover:border-blue-500 dark:group-hover:border-blue-400" />
                  )}
                </div>

                {/* Column 3: Main Experience Content */}
                {item.type === 'company' ? (
                  <div className="pb-4 pt-[3px] grow">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      {item.company}
                    </h3>
                  </div>
                ) : (
                  <div className="pb-8 sm:pb-10 pl-4 sm:pl-2 pt-[3px] grow flex flex-col space-y-2 border-l-2 border-gray-200 dark:border-gray-800 sm:border-l-0 ml-3 sm:ml-0">
                    {/* Header Title */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="text-lg font-semibold tracking-tight text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                        {item.role}
                      </h4>
                    </div>

                    {/* Date (Mobile only, shown below role title) */}
                    <div className="block sm:hidden text-xs font-mono text-gray-450 dark:text-gray-500">
                      {item.dates.endsWith('Present') ? `${item.dates}\u00a0` : item.dates}
                    </div>

                    {/* Optional blog post redirect */}
                    {item.blogLink && (
                      <div className="text-xs font-mono">
                        <Link
                          href={item.blogLink}
                          className="text-blue-500 hover:underline dark:text-blue-400"
                        >
                          Read Architecture Post &rarr;
                        </Link>
                      </div>
                    )}

                    {/* Description bullets in prose styling */}
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400 mt-1 dark:prose-invert">
                      <ul className="space-y-1.5">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap pt-2 gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-350 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
