<template>
  <div>
    <!-- Item Start -->
    <div class="job-item">
      <div class="job__logo">
        <img src="images/photosnap.svg" alt="Photosnap" />
      </div>

      <div class="job-item__main-copy">
        <div class="job-item__header">
          <span class="meta__company">
            Photosnap
          </span>
          <span class="meta__pill meta__pill--primary">
            New!
          </span>
          <span class="meta__pill meta__pill--secondary">
            Featured
          </span>
        </div>

        <div class="job-item__body">
          <div class="job__title">
            Senior Frontend Developer
          </div>
        </div>

        <div class="job-item__footer">
          <div class="job__sub">
            1d ago
          </div>

          <div class="job__sub">
            Full Time
          </div>

          <div class="job__sub">
            USA only
          </div>
        </div>
      </div>

      <div class="job-item__side">
        <!-- Role -->
        <span class="job-tag">Frontend</span>
        <!-- Level -->
        <span class="job-tag">Senior</span>
        <!-- Languages -->
        <span class="job-tag">HTML</span>
        <span class="job-tag">CSS</span>
        <span class="job-tag">JavaScript</span>
      </div>
    </div>
    <!-- Item End -->
  </div>
</template>

<style lang="scss">
@import "../variables";

.job-item {
  background: $LIGHT_CYAN;
  padding: 24px;
  border-radius: 4px;
  box-sizing: border-box;
  border-left: 4px $PRIMARY_COLOR solid;
  display: flex;
  align-items: center;

  &__main-copy {
    flex: 1;
    padding-left: 25px;

    .job-item__header {
      .meta {
        &__company {
          color: $PRIMARY_COLOR;
          margin-right: 8px;
          font-weight: bold;
        }

        &__pill {
          display: inline-block;
          padding: 0.5em 0.5em 0.2em;
          color: $LIGHT_CYAN;
          border-radius: 15px;
          box-sizing: border-box;
          font-size: $TEXT-SIZE - 5;
          text-transform: uppercase;

          &--primary {
            background-color: $PRIMARY_COLOR;
          }

          &--secondary {
            background-color: $VERY_DARK_CYAN;
          }
        }
      }
    }

    .job-item__body {
      .job {
        &__title {
          font-weight: bold;
          font-size: $TEXT_SIZE + 2;
          padding: 10px 0;
        }
      }
    }

    .job-item__footer {
      display: flex;

      .job {
        &__sub {
          color: #838c89;
          font-size: $TEXT-SIZE - 2;

          &:not(:first-child) {
            margin-left: 10px;

            &:before {
              content: "•";
              margin-right: 5px;
            }
          }
        }
      }
    }
  }

  &__side {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    .job-tag {
      color: $PRIMARY_COLOR;
      background-color: $LIGHT_CYAN_2;
      margin: 0 5px;
      padding: 4px;
      border-radius: 2px;
    }
  }
}
</style>

<script>
export default {
  name: "HelloWorld",
};
</script>
