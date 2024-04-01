
export default function HomeStars() {

  const dots = [
    { top: '232px', left: '339px' },
    { top: '381px', right: '254px' },
    { top: '480px', left: '267px' },
    { top: '149px', right: '182px' },
    { top: '86px', left: '236px' },
    { top: '438px', right: '22px' },
    { top: '182px', left: '16px' },
    { top: '15px', right: '98px' },
    { top: '259px', left: '122px' },
    { top: '557px', right: '325px' },
    { top: '219px', left: '310px' },
    { top: '454px', right: '363px' },
    { top: '186px', left: '399px' },
    { top: '362px', right: '234px' },
    { top: '402px', left: '399px' },
    { top: '412px', right: '220px' },
    { top: '430px', left: '372px' },
    { top: '98px', right: '105px' },
    { top: '533px', left: '338px' },
    { top: '587px', right: '311px' },
    { top: '18px', left: '37px' },
    { top: '321px', right: '25px' },
    { top: '318px', left: '266px' },
    { top: '199px', right: '247px' },
    { top: '334px', left: '233px' },
    { top: '29px', right: '197px' },
    { top: '516px', left: '205px' },
    { top: '131px', right: '42px' },
    { top: '68px', left: '358px' },
    { top: '306px', right: '157px' },
    { top: '306px', left: '378px' },
    { top: '197px', right: '396px' },
    { top: '187px', left: '12px' },
    { top: '534px', right: '336px' },
    { top: '168px', left: '329px' },
    { top: '237px', right: '313px' },
    { top: '586px', left: '204px' },
    { top: '409px', right: '382px' },
    { top: '403px', left: '214px' },
    { top: '512px', right: '101px' },
  ];

  return (
   <div className="absolute left-[calc(50vw-400px)] top-0 w-full max-w-[1389px] rotate-[30deg] transform">
      {dots.map((dot, index) => (
        <div
          key={index}
          role="presentation"
          className="absolute h-0.5 w-0.5 rounded-full bg-white"
          style={{ top: dot.top, left: dot.left, right: dot.right }}
        ></div>
      ))}
    </div>
  )
}
