import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeroVideoSlider from '@/components/HeroSlideBar'
import IntroAnimation from '@/components/IntoAnimation'

export default function Home() {
  return (
    <>
      {/* <IntroAnimation /> */}

      <>
        <HeroVideoSlider />
        <Navbar />
      </>

      {/* ── MISSION ───────────────────────────── */}
      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <div className={styles.missionLabel}>OUR MISSION</div>
          <h2 className={styles.missionTitle}>
            We don't just take photographs.<br />
            <em>We build careers.</em>
          </h2>
          <p className={styles.missionText}>
            Your story deserves to be seen. We partner with creatives to craft industry-standard
            portfolios that command attention — in casting rooms, on agency tables, and across
            every digital platform. Arrive at every opportunity looking like you already belong at the top.
          </p>
          {/* <div className={styles.missionStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Portfolios Created</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* ── STICKY VIDEO ──────────────────────── */}
      <section className={styles.videoSection}>
        <div className={styles.videoSticky}>
          <video
            className={styles.stickyVideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/videos/BtsVideo.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.videoOverlay}>
            <h2 className={styles.videoText}>
              Every frame.<br />
              <em>A statement.</em>
            </h2>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>THE FULL EXPERIENCE</p>
            <h2 className={styles.sectionTitle}>Everything you need<br /><em>to stand out.</em></h2>
          </div>
          <div className={styles.servicesGrid}>
            {[
              { num: '01', name: 'Premium Shoots', desc: 'Studio and location sessions crafted to industry standards with dedicated creative direction.' },
              { num: '02', name: 'Expert Editing', desc: 'Professional retouching and color grading elevating images to publication-ready quality.' },
              { num: '03', name: 'Social-Ready Assets', desc: 'Optimized content for Instagram, casting platforms, and digital portfolios.' },
              { num: '04', name: 'Brand Strategy', desc: 'Positioning and visual identity guidance ensuring one powerful voice across every platform.' },
            ].map((s) => (
              <div key={s.num} className={styles.serviceCard}>
                <span className={styles.serviceNum}>{s.num}</span>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <div className={styles.serviceArrow}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASONRY PHOTO GRID ────────────────── */}
      <section className={styles.photoSection}>
        <div className={styles.photoHead}>
          <p className={styles.sectionLabel}>CURATED WORK</p>
          <h2 className={styles.sectionTitle}>The Portfolio<br /><em>Standard</em></h2>
        </div>
        <div className={styles.masonryGrid}>
          <div className={`${styles.mItem} ${styles.mTall}`}>
            <img src="/images/Gallery/1.jpg" alt="Fashion portrait" loading="lazy" />
          </div>
          <div className={`${styles.mItem} ${styles.mShort}`}>
            <img src="/images/Gallery/3.jpg" alt="Model shoot" loading="lazy" />
          </div>
          <div className={`${styles.mItem} ${styles.mMed}`}>
            <img src="/images/Gallery/9.jpg" alt="Studio session" loading="lazy" />
          </div>
          <div className={`${styles.mItem} ${styles.mWide}`}>
            <img src="/images/Gallery/14.jpg" alt="Editorial look" loading="lazy" />
          </div>
          <div className={`${styles.mItem} ${styles.mTall2}`}>
            <img src="/images/Gallery/7.jpg" alt="Headshot session" loading="lazy" />
          </div>
          <div className={`${styles.mItem} ${styles.mSq}`}>
            <img src="/images/Gallery/10.jpg" alt="Fashion editorial" loading="lazy" />
          </div>
          <div className={`${styles.mItem} ${styles.mShort2}`}>
            <img src="/images/Gallery/5.jpg" alt="Creative direction" loading="lazy" />
          </div>
        </div>
        <div className={styles.photoFooter}>
          <Link href="/gallery" className={styles.btnGold}>View Full Gallery →</Link>
        </div>
      </section>

      {/* ── WHO WE SERVE ──────────────────────── */}
      <section className={styles.audience}>
        <div className={styles.audienceInner}>
          <div className={styles.audienceLeft}>
            <p className={styles.sectionLabel}>CRAFTED FOR</p>
            <h2 className={styles.audienceTitle}>
              Ambitious<br /><em>Creatives.</em>
            </h2>
            <p className={styles.audienceSubtitle}>Built for those who refuse to be overlooked.</p>
            <Link href="/join" className={styles.btnPrimary}>Start Your Journey</Link>
          </div>
          <div className={styles.audienceRight}>
            {[
              { type: 'Aspiring Models', asset: 'Agency-ready portfolios', outcome: 'Opens doors to top representation' },
              { type: 'Actors', asset: 'Dynamic headshots & reels', outcome: 'Books auditions and casting rooms' },
              { type: 'Design Students', asset: 'Curated lookbooks', outcome: 'Defines your aesthetic standard' },
              { type: 'Influencers', asset: 'Platform-optimized content', outcome: 'Converts followers into fans' },
              { type: 'Professionals', asset: 'Executive portraits', outcome: 'Commands industry respect' },
            ].map((row, i) => (
              <div key={i} className={styles.audienceRow}>
                <div className={styles.audienceType}>{row.type}</div>
                <div className={styles.audienceAsset}>{row.asset}</div>
                <div className={styles.audienceOutcome}>{row.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────── */}
      <section className={styles.whyUs}>
        <div className={styles.whyInner}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>THE HOUSE STANDARD</p>
            <h2 className={styles.sectionTitle}>Why Choose<br /><em>Us</em></h2>
          </div>
          <div className={styles.whyGrid}>
            {[
              { n: '01', title: 'Industry-Grade Quality', desc: 'Meeting the exacting standards of top agencies and brands.' },
              { n: '02', title: 'Creative Direction', desc: 'Expert guidance on posing, styling, and narrative in every package.' },
              { n: '03', title: 'Versatile Formats', desc: 'Studio, outdoor, and lifestyle sessions tailored to you.' },
              { n: '04', title: 'Platform Optimised', desc: 'Content precisely formatted for portals and social media.' },
              { n: '05', title: 'Premium Post-Production', desc: 'Professional retouching to publication standard.' },
              { n: '06', title: 'End-to-End Experience', desc: 'Seamless, elevated, and stress-free from concept to delivery.' },
            ].map((w) => (
              <div key={w.n} className={styles.whyCard}>
                <span className={styles.whyNum}>{w.n}</span>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Your Moment<br /><em>Starts Now.</em></h2>
          <p className={styles.ctaSub}>Book your shoot today. Build your portfolio. Own your future.</p>
          {/* <Link href="/join" className={styles.btnPrimary}>Choose Your Package</Link> */}
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <span className={styles.footerMark}>HD</span>
            <span className={styles.footerBrand}>HOUSE OF THE PORTFOLIO</span>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/join">Join Now</Link>
          </div>
          <div className={styles.footerContact}>
            <p>hello@houseofportfolios.com</p>
            <p>@houseofportfolios</p>
            <p>Studio by appointment only</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} House of the Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
