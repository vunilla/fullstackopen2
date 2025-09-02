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
  const kurssi = {
    nimi: 'FullStackOpen',
    osat: [
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
}


  return (
    <div>
      <h1>{kurssi.nimi}</h1>
      <p>
      <Sisalto osa={kurssi.osat[0].nimi} tehtava={kurssi.osat[0].tehtavat}/>
      </p>
      <p>
      <Sisalto osa={kurssi.osat[1].nimi} tehtava={kurssi.osat[1].tehtavat}/>
      </p>
      <p>
      <Sisalto osa={kurssi.osat[2].nimi} tehtava={kurssi.osat[2].tehtavat}/>
      </p>
      <p>
        <Yht tehtava={kurssi.osat[0].tehtavat + kurssi.osat[1].tehtavat+ kurssi.osat[2].tehtavat}/>
      </p>
    </div>
  )
}

export default App
