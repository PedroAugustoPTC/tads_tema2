import React, { useState } from 'react';
import { FormControl } from '@material-ui/core';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Class = () => {

    const [subject, setSubject] = useState('');

    return (
        <div className="gambs">
            <FormControl>
                <Input
                    label="Nome da Turma"
                    name="turma"
                    auxText="Nome da turma"
                />
                <Input
                    label="Semestre"
                    name="semestre"
                    auxText="Semestre"
                />
            </FormControl>
            <br></br>

            <FormControl>

                <Input
                    label="Ano"
                    name="ano"
                    auxText="Ano"
                />

                <Select
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                    name="subject"
                    label="Professores"
                    options={[
                        { value: "Corno", label: "Corno" },
                        { value: "Maconheiro", label: "Maconheiro" },
                    ]}
                />

            </FormControl>

        </div>
    )
}

export default Class;
