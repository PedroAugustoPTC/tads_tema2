import React, { useState } from 'react';
import Button from '../../components/Button';
import Select from '../../components/Select';

import './styles.css';

const Rate = () => {
    const [subject, setSubject] = useState('');

    return (
        <div className="gambs">
            <div className="rate-area">
                <Select
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                    name="turma"
                    label="Turma"
                    options={[
                        { value: "Unno", label: "Unno" },
                        { value: "Duo", label: "Duo" },
                    ]}
                >
                </Select>

                <Select
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                    name="atividade"
                    label="Atividade"
                    options={[
                        { value: "Atividade 1", label: "Atividade 1" },
                        { value: "Atividade 2", label: "Atividade 2" },
                    ]}
                >
                </Select>
            </div>

            <Button label="Salvar" func={() => {}}></Button>
        </div>
    )
}

export default Rate;
