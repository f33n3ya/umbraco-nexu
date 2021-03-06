﻿angular.module("umbraco.resources")
        .factory("Our.Umbraco.Nexu.Resource", function ($http) {
            return {
                getIncomingLinks: function (id) {
                    return $http.get(Umbraco.Sys.ServerVariables.Nexu.GetIncomingLinks + "?contentId=" + id);
                },
                checkDescendants: function (id, isMedia) {
                    if (isMedia) {
                        return $http.get(Umbraco.Sys.ServerVariables.Nexu.CheckMediaDescendantsForIncomingLinks + "?mediaId=" + id);
                    }

                    return $http.get(Umbraco.Sys.ServerVariables.Nexu.CheckContentDescendantsForIncomingLinks + "?contentId=" + id);
                },
                getRebuildStatus : function() {
                    return $http.get(Umbraco.Sys.ServerVariables.Nexu.GetRebuildStatus);
                },
                rebuild : function(id) {
                    return $http.get(Umbraco.Sys.ServerVariables.Nexu.Rebuild + "?id=" + id);
                }
            };
        });