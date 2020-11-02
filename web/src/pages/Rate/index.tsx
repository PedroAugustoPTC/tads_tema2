import { FormControl } from '@material-ui/core';
import React, { useState } from 'react';
import Select from '../../components/Select';

const Rate = () => {
    const [subject, setSubject] = useState('');

    return (
        <div className="gambs">
            <FormControl>
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
            </FormControl>
        </div>
    )
}

export default Rate;
