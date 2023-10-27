<template>
    <div class="calculate-earnings__wrapper">
        <div class="top">
            <p>Calculate Earning</p>
        </div>
    <form action="" class="form">
        <div class="input-container">
            <label for="rent-income">Rent Income(%)</label>
            <input type="text" name="rent-income" id="rent-income" placeholder="1">
        </div>
        <div class="input-container">
            <label for="capital-appreciation">Capital Appreciation(%)</label>
            <input type="text" name="capital-appreciation" id="capital-appreciation" placeholder="1">
        </div>
        <div class="input-container">
            <label for="duration">Duration(Month)</label>
            <input type="text" name="duration" id="duration" placeholder="3">
        </div>
    </form>
    </div>
</template>

<style scoped lang="scss">
.calculate-earnings__wrapper {
    border-radius: 15px;
    background: #D6F0FF;
    padding: 12px 14px;
}
</style>