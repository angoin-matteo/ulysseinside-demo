export default function Tarifs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Une formule pour tout</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Investissez une fois et soyez libre pour toujours.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Accès premium</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">Ayez la formule tout-en-un afin de réussir.</p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue">Sont inclus</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Accès au forum privé
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Ressources exclusives
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Accès privilégié aux conférences
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Suivi de vos investissements
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Payez une fois, pas plus</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">50€</span>
                </p>
                <a href="https://discord.gg/G4YHSdprXs" target="_blank" className="mt-10 block w-full rounded-md bg-blue px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[rgba(68,195,186,245)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Je suis prêt
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">Factures et reçus disponibles pour un remboursement facile par la société</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}