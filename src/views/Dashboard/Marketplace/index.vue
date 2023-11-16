<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="dashboard__wrapper">
        <div class="market-place">
            <div class="top">
                <h3>Find a preferred assets</h3>

                <div class="search__wrapper">
                    <div class="search-container">
                        <input type="search" name="search" id="search" placeholder="Search by name">
                        <span class="-icon"><i class="search"></i></span>
                    </div>
                    <button class="btn orange">My Assets</button>
                </div>
            </div>
            <filters-group />
            <div class="asset_cards">
                <template v-for="({ title, duration, location, assetYield, unitCost, saved }, i) in availableAssets" :key="i">
                    <asset-card :title="title" :duration="duration" :location="location" :asset-yield="assetYield"
                        :unit-cost="unitCost" :saved="saved" />
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FiltersGroup from '@/components/FiltersGroup.vue';
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
        unitCost: "$600k",
        saved: true
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
        unitCost: "$600k",
        saved: true

    },
    {
        title: "Lamborghini New Model, Fresh",
        duration: "36 weeks",
        location: "Vancouver, Canada",
        assetYield: " $2% /annum",
        unitCost: "$600k",
        saved: true

    },
];
</script>

<style scoped lang="scss">
.tabs-list {
    border-bottom: 1px solid #D5E1EE;
    margin-bottom: 30px;

    .tabs-trigger {
        padding: 9px;
        font-weight: 500;
        color: #7C859E;

        &[data-state="active"] {
            color: #0593A5;
            border-bottom: 4px solid #0593A5;
        }
    }
}

.marketplace__wrapper {
    width: 1116px;

    .marketplace__tabs,
    .market-place {
        border-radius: 15px;
        background: #FFF;
        padding: 30px;

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }
    }

    .marketplace__tabs {
        .asset_cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 30px;
            row-gap: 45px;
        }
    }

    .marketplace {
        margin-bottom: 24px;

        .financial__overview {
            margin-top: 18px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 37px;

            .overview__cards {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                row-gap: 15px;
            }

            .marketplace__breakdown {
                border-left: 2px solid #D5E1EE;
                border-right: 2px solid #D5E1EE;
                padding-left: 37px;
                padding-right: 37px;
            }
        }
    }
}
</style>