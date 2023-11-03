<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="verification">
        <div class="titles">
            <h3>Requirement</h3>
            <h3>Status</h3>
        </div>
        <form action="">
            <div class="verification-form-child bvn">
                <p>BVN Details</p>
                <div class="input-group">
                    <label for="bvn">Enter your BVN number</label>
                    <input type="text" placeholder="1234566678">
                </div>
            </div>
            <div class="verification-form-child identification">
                <p>Means Identification</p>
                <div class="input-group">
                    <label for="bvn">Select your preferred Means of Identification</label>
                    <input type="text" placeholder="1234566678">
                </div>
            </div>
            <div class="verification-form-child facial">Facial Recognition
                <div>
                    <div class="img__container">
                        <img src="@/assets/imgs/camera.png" alt="camera icon"/>
                    </div>
                    <p>
                        Take a selfie to validate your identity, you can change photo in the profile section at any time.
                    </p>
                </div>
            </div>

            <div class="submit-container">
                <button class="bg-blue py-3 px-5 text-white rounded-md">Submit</button>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.verification {
    .titles {
        display: flex;
    }
    form {
        .facial {
            div {
                .img__container {
                    width: 42px;
                    height: 37px;
                }
            }
        }
        .verification-form-child {
            display: flex;
        }
    }
}
</style>