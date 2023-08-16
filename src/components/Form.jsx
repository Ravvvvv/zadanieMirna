import axios from 'axios'
import { useState } from 'react'
import Select from './Select'
import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [event, setEvent] = useState({ key: '', val: '', })
    const [city, setCity] = useState({ key: '', val: '', })
    const [errors, setErrors] = useState('')

    const choicesEvents = [
        ['', '---'],
        ['front-end-react', 'Front end -ReactJS'],
        ['back-end-react', 'Back end -Node.js'],
        ['full-stack-react', 'Full Stack -MERN'],
        ['tester-manual', 'Tester-Manual'],
    ]
    const choicesCitys = [
        ['', '---'],
        ['online', 'Online'],
        ['warszaw', 'Warszawa'],
        ['krakow', 'Krakow'],
    ]

    const saveEvent = (eventObj) => {
        console.log('save event');
    }

    const resetForm = () => {
        setName('')
        setEvent({ key: '', val: '', })
        setCity({ key: '', val: '', })
        setErrors([])
    }

    const valiDateForm = (e) => {
        e.preventDefault()
        let errosValidate = []
        if (name.trim() === '') {
            errosValidate.push('Wpisz Imie i Nazwisko')
            // push daje nam mozliwosc wyswietlenia bledu
        }
        if (event.key.trim() === '') {
            errosValidate.push('wybierz szkolenie')
        }
        if (city.key.trim() === '') {
            errosValidate.push('wybierz miasto')
        }

        if (errosValidate.length > 0) {
            setErrors(
                errosValidate.map((errorTxt, index) => {
                    return <li key={index}>{errorTxt}</li>
                })
            )
            return false
        }
        // jesli mamy cos wpisane cos na tej tablicy

        saveEvent()

        resetForm()
    }

    const handelChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEvent = (e) => {
        setEvent({
            key: e.target.value,
            val: e.target.options[e.target.selectedIndex].innerText
            // e.target.selectedIndex opcja zostaje wybrana w selecie. 
            // setEvent zmiena ma obkiety jak key i val ktore sa importowane z selcet.js a wartoscia sa wartosci z selecta
            //values, onValueChange, selectedValue, ...rest 
        })
    }
    const handleChangeCity = (e) => {
        setCity({
            key: e.target.value,
            val: e.target.options[e.target.selectedIndex].innerText
            // e.target.selectedIndex opcja zostaje wybrana w selecie. 
            // setEvent zmiena ma obkiety jak key i val ktore sa importowane z selcet.js a wartoscia sa wartosci z selecta
            //values, onValueChange, selectedValue, ...rest 
        })
    }

    return (
        <div className='formWrapper'>
            <from action="#" onSubmit={valiDateForm}>
                <div className="wrapper">
                    <label htmlFor="name">Imie i nazwisko</label>
                    <input type="text" id="name" value={name}
                        onChange={handelChangeName} />

                </div>

                <div className="wrapper">
                    <label htmlFor="event">Wydarzenie</label>
                    <Select
                        values={choicesCitys}
                        selectedValue={event.key}
                        // gdzie event jest stanem    const [event, setEvent] = useState({ key: '', val: '', })
                        onValueChange={handleChangeEvent}
                        id="events"
                    />
                </div>

                <div className="wrapper">Miasto</div>
                <label htmlFor="city"></label>
                <Select
                    values={choicesEvents}
                    selectedValue={city.key}
                    // gdzie event jest stanem    const [event, setEvent] = useState({ key: '', val: '', })
                    onValueChange={handleChangeCity}
                    id="city"
                />

                <div className="wrapper"></div>
                <button type="submit" >Zapisz na szkolenie</button>
            </from>
            <div className='errorsWrapper'>
                <ul className='errors'>
                    {errors}
                </ul>
            </div>
        </div>

    )
}

export default Form