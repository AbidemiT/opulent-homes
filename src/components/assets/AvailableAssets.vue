<template>
  <div>
    <div class="asset_cards">
      <template
        v-for="(
          { title, duration, location, assetReturn, unitCost, saved, assetType, size }, i
        ) in savedAssets"
        :key="i"
      >
        <asset-card
          :title="title"
          :duration="duration"
          :location="location"
          :asset-return="assetReturn"
          :asset-type="assetType"
          :size="size"
          :unit-cost="unitCost"
          :saved="saved"
          type="fin"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import AssetCard from '@/components/cards/AssetCard.vue'
const savedAssets = [
  {
    title: 'Amberville Project',
    duration: '36',
    location: 'Epe Lagos Nigeria',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Vacant Land'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Fresh'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Fresh'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Fresh'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Fresh'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Fresh'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Fresh'
  },
]
</script>
<style lang=""></style>
