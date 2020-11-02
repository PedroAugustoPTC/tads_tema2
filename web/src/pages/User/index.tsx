import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import Input from '../../components/Input';

import '../../components/Navbar/styles.css';
import './styles.css';

const User = () => {
    const [value, setValue] = useState('professor');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }

    return (
        <div className="gambs">
            <FormControl component="fieldset">
                <RadioGroup
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                        value="professor"
                        label="Professor"
                        control={<Radio />}
                    />
                    <FormControlLabel
                        value="aluno"
                        label="Aluno"
                        control={<Radio />}
                    />
                </RadioGroup>
            </FormControl>
            <br></br>

            {
                value === 'aluno' &&
                (
                    <FormControl component="fieldset">
                        <Input label="Nome" name="nome" auxText="Nome" />
                        <Input label="Matrícula" name="matricula" auxText="Matrícula" />
                        <p>Turma</p>
                        <div className="container-classes">
                            <RadioGroup
                                value={value}
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel
                                    value="professor"
                                    label="Turma Unus"
                                    control={<Radio />}
                                />
                                <FormControlLabel
                                    value="aluno"
                                    label="Turma Duo"
                                    control={<Radio />}
                                />
                                <FormControlLabel
                                    value="aluno"
                                    label="Turma Tribus"
                                    control={<Radio />}
                                />
                                <FormControlLabel
                                    value="aluno"
                                    label="Turma Quattur"
                                    control={<Radio />}
                                />
                                <FormControlLabel
                                    value="aluno"
                                    label="Turma Quinque"
                                    control={<Radio />}
                                />
                            </RadioGroup>
                        </div>
                    </FormControl>
                )
            }

            {
                value === 'professor' &&
                (
                    <FormControl component="fieldset">
                        <Input label="Nome" name="nome" auxText="Nome" />
                        <Input label="E-mail" name="email" auxText="E-mail" />
                        <Input label="CPF" name="cpf" auxText="CPF" />
                    </FormControl>
                )
            }

        </div>
    );
}

export default User;
