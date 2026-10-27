import Link from 'next/link'

const sections = [
  {
    title: 'Information we collect',
    body: 'We collect information you provide to use ZippCart, information created through your activity in the app, and limited technical information needed to keep the service reliable and secure.',
  },
  {
    title: 'Phone number and account information',
    body: 'When you create or manage an account, we may collect your phone number, name, email address, account credentials, and verification details. Your phone number may be used to sign you in, verify your account, and send important service communications.',
  },
  {
    title: 'Delivery address',
    body: 'We collect delivery details such as your name, street address, apartment or unit number, city, state, postal code, and delivery instructions. This information is used to fulfill and deliver your orders.',
  },
  {
    title: 'Orders and purchase information',
    body: 'We collect information about items you view or purchase, order status, payment and transaction details, refunds, and communications about your orders. Payment card information is processed by our payment providers and is not stored by ZippCart in full.',
  },
  {
    title: 'Profile information',
    body: 'You may choose to add profile details such as your name, profile photo, saved addresses, preferences, and other information that helps personalize your ZippCart experience.',
  },
  {
    title: 'Device/app usage and crash diagnostics',
    body: 'We may collect device type, operating system, app version, identifiers, approximate location derived from your device settings, log data, feature interactions, and crash diagnostics. This helps us operate, troubleshoot, and improve the app.',
  },
  {
    title: 'How we use data',
    body: 'We use information to provide and personalize ZippCart, process and deliver orders, communicate with you, provide support, detect fraud and abuse, maintain security, understand app performance, improve our services, and comply with legal obligations.',
  },
  {
    title: 'Data sharing',
    body: 'We may share information with service providers that help us operate ZippCart, including delivery, payment, hosting, analytics, customer support, and security providers. We may also share information when required by law or as part of a merger, acquisition, or other business transfer. ZippCart does not sell users\' personal data.',
  },
  {
    title: 'Data security',
    body: 'We use reasonable administrative, technical, and organizational safeguards designed to protect information against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
  },
  {
    title: 'Data retention',
    body: 'We retain information for as long as reasonably necessary to provide the service, complete transactions, resolve disputes, maintain business and security records, and meet legal or regulatory requirements. Retention periods vary based on the type and purpose of the information.',
  },
  {
    title: 'Account deletion',
    body: 'You may request deletion of your ZippCart account and associated personal information through the app or by contacting us. We may retain limited information when required by law, needed to resolve disputes, prevent fraud, or protect our legal rights.',
  },
  {
    title: "Children's privacy",
    body: 'ZippCart is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this Privacy Policy from time to time. When we do, we will post the updated version here and revise the effective date. Your continued use of ZippCart after an update means you acknowledge the revised policy.',
  },
  {
    title: 'Contact us',
    body: 'If you have questions, requests, or concerns about this Privacy Policy or our privacy practices, contact us at zippcartsupport@gmail.com.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-foreground" aria-label="ZippCart home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">Z</span>
            <span className="text-base font-semibold tracking-tight">ZippCart</span>
          </Link>
          <span className="text-sm text-muted-foreground">Privacy Policy</span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">ZippCart</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground">How we collect, use, and protect your information when you use the ZippCart shopping app.</p>
          <div className="mt-6 inline-flex rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
            Effective date: <span className="ml-1 font-medium text-foreground">September 11, 2026</span>
          </div>
        </div>

        <div className="mt-14 grid gap-12 border-t border-border pt-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <p className="sticky top-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">On this page</p>
            <nav className="sticky top-16 mt-4 space-y-2" aria-label="Privacy Policy sections">
              {sections.map((section) => (
                <a key={section.title} href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block text-sm leading-5 text-muted-foreground transition-colors hover:text-foreground">
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="max-w-2xl space-y-10">
            <p className="text-base leading-8 text-foreground/80">
              This Privacy Policy explains how ZippCart collects and handles information when you use our app and related services. By using ZippCart, you agree to the practices described below.
            </p>
            {sections.map((section) => {
              const id = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
              return (
                <section key={section.title} id={id} className="scroll-mt-8 space-y-3">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">{section.title}</h2>
                  <p className="text-base leading-8 text-muted-foreground">{section.body}</p>
                </section>
              )
            })}
          </article>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 ZippCart</span>
          <Link href="/" className="font-medium text-foreground hover:underline">Back to home</Link>
        </div>
      </footer>
    </main>
  )
}
