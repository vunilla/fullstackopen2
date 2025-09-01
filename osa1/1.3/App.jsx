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
  const osa1 = {
    nimi: '"Reactin perusteet"',
    tehtavat: 14
  }
  const osa2 = {
    nimi: '"Palvelimen kanssa tapahtuva kommunikointi"',
    tehtavat: 20
  }
  const osa3 = {
    nimi: '"Palvelimen ohjelmointi NodeJS:n Express-kirjastolla"',
    tehtavat: 22
  }



  return (
    <div>
      <h1>{kurssi}</h1>
      <p>
      <Sisalto osa={osa1.nimi} tehtava={osa1.tehtavat}/>
      </p>
      <p>
      <Sisalto osa={osa2.nimi} tehtava={osa2.tehtavat}/>
      </p>
      <p>
      <Sisalto osa={osa3.nimi} tehtava={osa3.tehtavat}/>
      </p>
      <p>
        <Yht tehtava={osa1.tehtavat + osa2.tehtavat+ osa3.tehtavat}/>
      </p>
    </div>
  )
}

export default App