<template>
  <div>
    <div class="modal-card" style="width: auto">
      <section
        class="modal-card-body is-flex-direction-row is-justify-content-center"
      >
        <figure class="image is-flex-direction-row is-justify-content-center">
          <img
            src="https://picsum.photos/600/400"
            alt="A random image"
            ratio="6by4"
          />
        </figure>
      </section>
      <footer
        class="modal-card-foot is-flex-direction-row is-justify-content-center"
      >
        <b-button
          label="Back"
          @click="
          $emit('close');
            Back();
            
          "
        />
      </footer>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
export default {
  methods: {
    Back() {
      EventBus.$emit("openGameModal2");
    },
  },
};
</script>