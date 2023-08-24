import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme, isNew }) =>
        isNew ? "transparent" : theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 8px; /* Reduce the overall padding for a more compact size */

    > button {
        border: none;
        background: none;
        margin-left: 4px; /* Adjust the margin to move the icon closer to the text */
        margin-right: 8px; /* Add some space between the icon and the right edge */
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > input {
        flex: 1;
        height: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
