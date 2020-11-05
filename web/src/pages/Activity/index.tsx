import React, { useState } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const Activy = () => {

    const [subject, setSubject] = useState('');

    return (
        <div className="gambs">
            <div className="activity-area">
                <Input
                    label="Valor"
                    name="turma"
                    auxText="Valor"
                />

                <Select
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value)}}
                    name="subject"
                    label="Turma"
                    options={[
                        { value: "Unno", label: "Unno" },
                        { value: "Duo", label: "Duo" },
                    ]}
                />

                <Input
                    label="Data"
                    name="data"
                    auxText="Data"
                />
            </div>
        </div >
    )
}

export default Activy;
