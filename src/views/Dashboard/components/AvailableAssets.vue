<template>
    <div class="available__assets">
        <div class="top">
            <h3>My Assets</h3>
            <router-link :to="{ name: 'assets' }">Find Assets</router-link>
        </div>
        <div class="asset_cards">
            <template v-for="({title, duration, location, assetYield, unitCost}, i) in availableAssets" :key="i">
                <asset-card :title="title" :duration="duration" :location="location" :asset-yield="assetYield" :unit-cost="unitCost"/>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import AssetCard from "../../../components/cards/AssetCard.vue";

const availableAssets = [
    {
        title: "Amberville Project Ekpe. Lagos NG",
        duration: "36 weeks",
        location: "Lagos Nigeria",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
    {
        title: "Lamborghini New Model, Fresh",
        duration: "36 weeks",
        location: "Vancouver, Canada",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
    {
        title: "45,000 SQM Land, Lekki Lagos, NG.",
        duration: "36 weeks",
        location: "Lagos Nigeria",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
    {
        title: "Estate Bulloz - 40SQM Plus Land",
        duration: "36 weeks",
        location: "Vancouver, Canada",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
];
</script>

<style lang="scss" scoped>
.available__assets {
    border-radius: 15px;
    background: #FFF;
    padding: 29px;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 54px;

        a {
            color: #F26B35;
        }
    }

    .asset_cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap:29px;
        column-gap: 29px;
    }
}
</style>