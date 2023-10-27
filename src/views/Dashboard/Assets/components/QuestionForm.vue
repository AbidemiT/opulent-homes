<template>
    <div class="question-form">
        <p>Can’t find an answer to a question? Ask now</p>
        <form action="">
            <div class="input-container">
                <label for="question">Type a question below</label>
                <input type="text" placeholder="Ex. How does asset yield work on abode" id="question">
            </div>
            <div class="textarea-container">
                <label for="explanation">Explain in details what you mean by this question</label>
                <textarea name="explanation" id="explanation" cols="30" rows="10">Type here</textarea>
            </div>

            <div class="submit-container">
                <button class="btn atgd fw-700">Submit Question</button>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.question-form {
    color: #151616;

    p {
        margin-bottom: 34px;
    }

    form {
        display: flex;
        flex-direction: column;

        .input-container,
        .textarea-container {
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 6px;
                font-weight: 500;
            }

            input,
            textarea {
                border-radius: 6px;
                background: #F5F9FE;
                padding: 18px 16px;
                color: #86959E;
                width: 538px;
                max-width: 538px;

                outline: none;
            }

            input {
                margin-bottom: 22px;
            }

            textarea {
                margin-bottom: 28px;
            }

        }

        .submit-container {
            .btn {
                padding: 14px 28px;
                margin-top: 0;
            }
        }
    }
}
</style>