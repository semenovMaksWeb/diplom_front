<template>
    <template>
        <vue-final-modal name="taskForm" :value="true" :ssr="true" :classes="false" overlay-class="" content-class=""
            styles="" overlay-style="" content-style="" :lock-scroll="true" :hide-overlay="false" :click-to-close="true"
            :esc-to-close="false" :prevent-click="false" :attach="false" transition="vfm" overlay-transition="vfm"
            :z-index-auto="true" :z-index-base="1000" :z-index="false" :focus-retain="true" :focus-trap="false"
            :fit-parent="true" :drag="false" drag-selector="" :keep-changed-style="false" :resize="false"
            :resize-directions="['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']" :min-width="0" :min-height="0"
            :max-width="Infinity" :max-height="Infinity">
            ...modal content
        </vue-final-modal>
    </template>
</template>

<script>
import { VueFinalModal, ModalsContainer } from 'vue-final-modal'

export default {
    components: {
        VueFinalModal,
        ModalsContainer
    }
}
</script>