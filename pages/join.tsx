import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Join.module.css'

export default function Join() {
  return (
    <>

      <Head>
        <title>Join Now – House of the Portfolio</title>
        <meta name="description" content="Choose your portfolio experience. Basic, Standard, or Premium packages starting from ₹4,999." />
      </Head>


      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerBg} />
        <div className={styles.headerContent}>
          <p className={styles.headerEyebrow}>CHOOSE YOUR EXPERIENCE</p>
          <h1 className={styles.headerTitle}>Invest In<br /><em>Your Future</em></h1>
          <p className={styles.headerSub}>Three paths. One standard of excellence.</p>
        </div>
      </div>


      <Navbar />
      {/* Plans Section */}
      <section className={styles.plansSection}>
        <div className={styles.plansInner}>
          <div className={styles.plansGrid}>

            {/* BASIC */}
            <div className={styles.planCard}>
              <div className={styles.planTop}>
                <p className={styles.planNum}>01</p>
                <h2 className={styles.planName}>Basic</h2>
                <p className={styles.planTagline}>The Entry Point</p>
                <div className={styles.planPrice}>
                  <span className={styles.priceRange}>₹4,999 – ₹9,999</span>
                </div>
              </div>
              <ul className={styles.planFeatures}>
                <li><span className={styles.tick}>✓</span>Essential portfolio images</li>
                <li><span className={styles.tick}>✓</span>Professional editing</li>
                <li><span className={styles.tick}>✓</span>Digital delivery</li>
              </ul>
              <p className={styles.planDesc}>Perfect for those just starting their creative journey. Get the foundational assets every creative needs to make their first impression.</p>
              <a href="mailto:hello@houseofportfolios.com?subject=Basic Package Enquiry" className={styles.planBtn}>
                Book Basic
              </a>
            </div>

            {/* STANDARD - Most Popular */}
            <div className={`${styles.planCard} ${styles.featured}`}>
              <div className={styles.popularBadge}>MOST POPULAR</div>
              <div className={styles.planTop}>
                <p className={styles.planNum}>02</p>
                <h2 className={styles.planName}>Standard</h2>
                <p className={styles.planTagline}>The Complete Toolkit</p>
                <div className={styles.planPrice}>
                  <span className={styles.priceRange}>₹8,999 – ₹14,999</span>
                </div>
              </div>
              <ul className={styles.planFeatures}>
                <li><span className={styles.tick}>✓</span>Multiple looks</li>
                <li><span className={styles.tick}>✓</span>Creative direction</li>
                <li><span className={styles.tick}>✓</span>Premium retouching</li>
                <li><span className={styles.tick}>✓</span>Social-ready assets</li>
              </ul>
              <p className={styles.planDesc}>The industry favourite. Everything you need to walk into any casting room or agency meeting fully prepared and confidently branded.</p>
              <a href="mailto:hello@houseofportfolios.com?subject=Standard Package Enquiry" className={styles.planBtnFeatured}>
                Book Standard
              </a>
            </div>

            {/* PREMIUM */}
            <div className={styles.planCard}>
              <div className={styles.planTop}>
                <p className={styles.planNum}>03</p>
                <h2 className={styles.planName}>Premium</h2>
                <p className={styles.planTagline}>The Full Experience</p>
                <div className={styles.planPrice}>
                  <span className={styles.priceRange}>₹14,999 – ₹19,999</span>
                </div>
              </div>
              <ul className={styles.planFeatures}>
                <li><span className={styles.tick}>✓</span>3 Signature looks</li>
                <li><span className={styles.tick}>✓</span>Styling guidance</li>
                <li><span className={styles.tick}>✓</span>Makeup support</li>
                <li><span className={styles.tick}>✓</span>Cinematic reel</li>
                <li><span className={styles.tick}>✓</span>BTS content</li>
                <li><span className={styles.tick}>✓</span>Premium delivery kit</li>
              </ul>
              <p className={styles.planDesc}>The definitive portfolio experience for talent who demand the very best and arrive at every opportunity fully prepared.</p>
              <a href="mailto:hello@houseofportfolios.com?subject=Premium Package Enquiry" className={styles.planBtn}>
                Book Premium
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Student Special Banner */}
      <section className={styles.studentSection}>
        <div className={styles.studentInner}>
          <div className={styles.studentLeft}>
            <p className={styles.studentLabel}>SPECIAL OFFER</p>
            <h2 className={styles.studentTitle}>The Student<br /><em>Special</em></h2>
          </div>
          <div className={styles.studentRight}>
            <div className={styles.studentPrice}>₹4,999</div>
            <p className={styles.studentDesc}>
              Designed for fashion and design students building their first professional portfolio.
              Industry-quality imagery at an accessible investment — because great talent deserves a great start.
            </p>
            <p className={styles.studentNote}>Ask about payment plans & campus collaborations.</p>
            <a href="mailto:hello@houseofportfolios.com?subject=Student Special Enquiry" className={styles.studentBtn}>
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Us Strip */}
      <section className={styles.whyStrip}>
        <div className={styles.whyStripInner}>
          {[
            { icon: '◈', label: 'Industry-Grade Quality' },
            { icon: '◉', label: 'Creative Direction Included' },
            { icon: '◆', label: 'Platform-Optimised Output' },
            { icon: '◇', label: 'End-to-End Experience' },
            { icon: '●', label: 'Premium Post-Production' },
          ].map((w, i) => (
            <div key={i} className={styles.whyItem}>
              <span className={styles.whyIcon}>{w.icon}</span>
              <span className={styles.whyLabel}>{w.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>Not sure which<br /><em>package is right?</em></h2>
          <p className={styles.contactDesc}>
            Reach out and we'll guide you to the perfect package for your goals, budget, and creative vision.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:hello@houseofportfolios.com" className={styles.contactValue}>
                hello@houseofportfolios.com
              </a>
            </div>
            <div className={styles.contactDivider} />
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Instagram</span>
              <a href="https://www.instagram.com/houseoftheportfolio?utm_source=qr&igsh=MWYwczgxNDNvdDVhMw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                @houseofportfolios
              </a>
            </div>
            <div className={styles.contactDivider} />
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactValue}>Studio by appointment only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© {new Date().getFullYear()} House of the Portfolio. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/join">Join Now</a>
          </div>
        </div>
      </footer>
    </>
  )
}
