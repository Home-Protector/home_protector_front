import styled from "styled-components";
import { colors } from "../../../common/constants/colors";

const Title = styled.h3`
	margin-bottom: 50px;
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 360px;
	margin: 0 auto;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin-bottom: 10px;
	width: 100%;

	p {
		font-size: 14px;
		color: ${colors.secondary};
	}
`;

const Label = styled.label`
	font-weight: bold;
`;

const Input = styled.input`
	width: 100%;
	height: 40px;
	margin-top: 4px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

const Checkbox = styled.input`
	margin-right: 8px;
`;

const CheckboxLabel = styled.label`
	font-size: 14px;

	a {
		color: ${colors.primary};
		text-decoration: underline;
		margin-left: 150px;
	}
`;

const Button = styled.button`
	width: 100%;
	height: 50px;
	margin-top: 20px;
	background-color: ${colors.primary};
	color: ${colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
`;

export { Title, Form, FormGroup, Label, Input, CheckboxWrapper, CheckboxLabel, Checkbox, Button };
