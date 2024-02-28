interface IInfoProps {
  dateFrom: string,
  dateTo: string,
  companyName: string,
  role: string
}

export function InfoPortfolio(props: IInfoProps) {
  const { dateFrom, dateTo, companyName, role } = props

  return (
    <div className="border border-solid border-white py-2 px-8 text-center mx-auto max-w-[200px] ">
      <div className="mb-0 block">
        <p className="info-code-title">Company</p>
        <p className="info-code-content">{companyName}</p>
      </div>

      <div className="mb-0 block">
        <p className="info-code-title">FROM</p>
        <div className="">
          <p className="info-code-content">{dateFrom}</p>
        </div>
      </div>
      <div className="mb-0 block">

        <p className="info-code-title">TO</p>
        <p className="info-code-content">{dateTo}</p>
      </div>
    </div>
  )
}
