<template>
    <div class="recent__transactions">
        <div class="top">
            <h3>Recent Transactions</h3>
        </div> 
        <div class="bottom" v-if="transactions.length > 0">
            <template v-for="({title, date, amount, type}, i) in transactions" :key="i">
                <transaction-card :title="title" :date="date" :amount="amount" :type="type"/>
            </template>
            <div class="cta">
                <a href="!#">More Transactions</a>
            </div>
        </div>

        <div class="bottom" v-else>
            <p>No Recent Transaction Yet</p>
            <div class="img__container">
                <img src="../../../assets/svgs/activity.svg" alt="Time icon">
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import TransactionCard from '@/components/cards/TransactionCard.vue';

const transactions: any[] = [];

// const transactions = [
//     {
//         title: "Asset Purchase",
//         date: "20 Jun, 2023",
//         amount: 360,
//         type: 'purchased'
// },
//     {
//         title: "Payout",
//         date: "20 Jun, 2023",
//         amount: 500,
//         type: 'payout'
// },
//     {
//         title: "Withdrawal",
//         date: "20 Jun, 2023",
//         amount: 100,
//         type: 'withdrawal'
// },
//     {
//         title: "Withdrawal",
//         date: "20 Jun, 2023",
//         amount: 250,
//         type: 'withdrawal'
// },
//     {
//         title: "Withdrawal",
//         date: "20 Jun, 2023",
//         amount: 250,
//         type: 'withdrawal'
// },
// {
//         title: "Payout",
//         date: "20 Jun, 2023",
//         amount: 500,
//         type: 'payout'
// },
//     {
//         title: "Asset Purchase",
//         date: "20 Jun, 2023",
//         amount: 360,
//         type: 'purchased'
// },
// ]
</script>

<style lang="scss" scoped>
.recent__transactions {
    padding: 29px;
    background: #ffffff;
    border-radius: 15px;
}
.top {
    margin-bottom: 32px;
}

.bottom {
    text-align: center;
    p {
        margin-top: 140px;
        margin-bottom: 32px;
    }
    .img__container {
        width: 120px;
        height: 128px;
        margin: 0 auto;
    }
}

.cta {
    text-align: center;
    margin-top: 45px;

    a {
        color: #0593A5;
        font-size: 0.9375em;
    }
}
</style>