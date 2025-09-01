const Kurssi = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Osassa {props.osa} on {props.tehtava} tehtävää.
      </p>
    </div>
  )
}


const Yht = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Yhteensä tehtäviä on {props.tehtava}.
      </p>
    </div>
  )
}



const App = () => {
  const kurssi = 'FullStackOpen'
  const osat = [
     {
      nimi: '"Reactin perusteet"',
      tehtavat: 14
    },
     {
      nimi: '"Palvelimen kanssa tapahtuva kommunikointi"',
      tehtavat: 20
    },
    {
      nimi: '"Palvelimen ohjelmointi NodeJS:n Express-kirjastolla"',
      tehtavat: 22
    }
]



  return (
    <div>
      <h1>{kurssi}</h1>
      <p>
      <Sisalto osa={osat[0].nimi} tehtava={osat[0].tehtavat}/>
      </p>
      <p>
      <Sisalto osa={osat[1].nimi} tehtava={osat[1].tehtavat}/>
      </p>
      <p>
      <Sisalto osa={osat[2].nimi} tehtava={osat[2].tehtavat}/>
      </p>
      <p>
        <Yht tehtava={osat[0].tehtavat + osat[1].tehtavat+ osat[2].tehtavat}/>
      </p>
    </div>
  )
}

export default App