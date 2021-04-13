
import React, { useState } from 'react';

const Sobre = () => {

    const [form, setForm] = useState({});

    const handleChange = (event) => {

        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }


    return (

        <div>

            <h2>Aprendendo inputs no FORM</h2>

            {JSON.stringify(form)}

            <input type="text" name="nome" value={form.nome || ""} onChange={handleChange} placeholder="nome do participante" />
            <br />
            <input type="text" name="nome_responsavel" value={form.nome_responsavel || ""} onChange={handleChange} placeholder="nome do responsável" />
            <br />
            <input type="number" name="tel_responsável" value={form.tel_responsável || ""} onChange={handleChange} placeholder="tel do responsavel" />
            <br />
            <input type="number" name="tel_emergencia" value={form.tel_emergencia || ""} onChange={handleChange} placeholder="tel emergência" />
            <br />

            <hr />
        </div>
    )
}

export default Sobre;