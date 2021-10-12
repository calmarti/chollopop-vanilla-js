const topics = {};
const hOP = topics.hasOwnProperty;

export default {

  events: {
    SHOW_SUCCESS: 'SHOW_SUCCESS',
    SHOW_ERROR: 'SHOW_ERROR',
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
    SHOW_EMPTY: 'SHOW_EMPTY',
    SEARCH: 'SEARCH',
    FILTER: 'FILTER'
  },

  subscribe: function (topic, listener) {
    // Create the topic's object if not yet created
    if (!hOP.call(topics, topic)) topics[topic] = [];

    // Add the listener to queue
    var index = topics[topic].push(listener) - 1;

    // Provide handle back for removal of topic
    return {
      remove: function () {
        delete topics[topic][index];
      },
    };
  },

  publish: function (topic, info) {
    // If the topic doesn't exist, or there's no listeners in queue, just leave
    if (!hOP.call(topics, topic)) return;

    // Cycle through topics queue, fire!
    topics[topic].forEach(function (item) {
      item(info != undefined ? info : {});
    });

  },
};