<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>My profile</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="@/assets/images/avatar.jpg"
                  >
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="message.name"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="message.information"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Yevhen Shershen',
          title: 'About me',
          excerpt: 'Thank you for joining our community...',
          information: "Hi, my name is Yevhen! I am junior frontend developer. I live in Poland. I am a positive, ambitious person."
        },
        {
          color: 'red',
          icon: 'mdi-book-open-blank-variant',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Website & Social',
          information: "GitHub: https://github.com/YevhenShershen; Gmail: shershen.yevhen@gmail.com"
        },
        {
          color: 'teal',
          icon: 'mdi-head-lightbulb',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'My skils',
          exceprt: 'New deals available, Join Today',
          information: "Some text"
        },
      ],
    }),
  }
</script>