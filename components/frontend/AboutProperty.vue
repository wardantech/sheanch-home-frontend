<template>
  <div>
    <section id="about-property">
      <b-container>
        <b-row class="row justify-content-center">
          <b-col lg="7" md="10" class="text-center">
            <div class="section-heading center">
              <h2>Learn More About Property Selling</h2>
              <p>Read the articles to expand your knowledge about how to sell your flat quickly, find tenants, a
                seller’s
                journey and more</p>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="4" md="4">
            <b-card class="y-property-card" title="When To Sell Your House And How?"
                    img-src="https://picsum.photos/300/300/?image=44" img-alt="Image" img-top>
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
              <template #footer>
                <small class="text-muted">September 2, 2020</small>
              </template>
            </b-card>
          </b-col>

          <b-col lg="4" md="4">
            <b-card class="y-property-card" title="4 Reasons To Sell Your Property Through"
                    img-src="https://picsum.photos/300/300/?image=42" img-alt="Image" img-top>
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
              <template #footer>
                <small class="text-muted">September 2, 2020</small>
              </template>
            </b-card>
          </b-col>

          <b-col lg="4" md="4">
            <b-card class="y-property-card" title="How Bproperty Helps Market Your Property"
                    img-src="https://picsum.photos/300/300/?image=43" img-alt="Image" img-top>
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
              <template #footer>
                <small class="text-muted">September 2, 2020</small>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  export default {
    name: "AboutProperty"
  }
</script>

<style scoped>

</style>
