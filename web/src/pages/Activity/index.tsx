import React, { useState } from 'react';
import { FormControl } from '@material-ui/core';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Activy = () => {

    const [subject, setSubject] = useState('');

    return (
        <div className="gambs">
            <FormControl>
                <Input
                    label="Valor"
                    name="turma"
                    auxText="Valor"
                />
                
                <Select
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                    name="subject"
                    label="Turma"
                    options={[
                        { value: "Unno", label: "Unno" },
                        { value: "Duo", label: "Duo" },
                    ]}
                />
            </FormControl>
            <br></br>

            <FormControl>

                <Input
                    label="Data"
                    name="data"
                    auxText="Data"
                />



            </FormControl>

        </div>
    )
}

export default Activy;
