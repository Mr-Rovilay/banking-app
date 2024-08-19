import HeaderBox from "@/components/headerbox"
import RightSideBar from "@/components/RightSideBar"
import TotalBalanceBox from "@/components/tota-balance-box"


const Home = () => {
  const loggedIn = {firstName:  "deji", lastName: "okonkwo", email: "john.doe@example.com"  };  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
         <HeaderBox type="greeting" title="Welcome" user={loggedIn.firstName || "Guest"} subtext="Access and manage your account and transaction efficiently"/>
         <TotalBalanceBox accounts={[]} totalBanks={1}  totalCurrentBalance={1250.35}/>
        </header>
        RECENT TRANS
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 458.34}]} 
      />
    </section>
  )
}

export default Home