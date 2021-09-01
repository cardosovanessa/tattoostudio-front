import styled from "styled-components";

export const BuscaDiv = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60vw;

	form {
		background-color: transparent;
		display: flex;
		align-items: center;
		width: 100%;
		margin: 10px;		
		margin-left: 95%;

	input {
		width: 20vw;
		font-size: 20px;
		line-height: 1.5;
		margin: 10px;
		border-radius: 10px;
	}

	label {
		color: #fff;
		font-size: 25px;
	}
}
	.cards { 
		display: flex;
		flex-wrap: wrap;
	}
`