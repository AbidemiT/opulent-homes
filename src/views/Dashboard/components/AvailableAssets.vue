<template>
    <div class="available__assets">
        <div class="top">
            <h3 class="font-bold">Available Assets</h3>
        </div>
        <div class="asset_cards">
            <template v-for="({title, duration, location, assetReturn, unitCost, size, assetType}, i) in availableAssets" :key="i">
                <asset-card :title="title" :duration="duration" :location="location" :asset-return="assetReturn" :unit-cost="unitCost" :size="size" :asset-type="assetType"/>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import AssetCard from "../../../components/cards/AssetCard.vue";

const availableAssets = [
    {
        title: "Amberville Project Ekpe",
        duration: "36",
        location: "Epe, Lagos State",
        assetReturn: "2",
        unitCost: "$600k",
        size: '600 sqm',
        assetType: "Vacant Land"

},
    {
        title: "Lamborghini New Model",
        duration: "36",
        location: "Vancouver, Canada",
        assetReturn: "2",
        unitCost: "$600k",
        assetType: "Fresh"

},
    {
        title: "Amberville 2",
        duration: "36",
        location: "Epe, Lagos State",
        assetReturn: "2",
        unitCost: "$600k",
        size: '40sqm plus land',
        assetType: "Vacant Land"

},
    {
        title: "Estate Bulloz",
        duration: "36",
        location: "Vancouver, Canada",
        assetReturn: "2",
        unitCost: "$600k",
        size: " 40SQM Plus Land",
        assetType: "Vacant Land"

},
];
</script>

<style lang="scss" scoped>
.available__assets {
    border-radius: 15px;
    background: #FFF;
    padding: 16px;

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
        row-gap:35px;
        column-gap: 15px;
    }
}
</style>