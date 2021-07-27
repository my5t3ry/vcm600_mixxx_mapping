var vcm600 = {};
vcm600.selectedGroup = "[Channel1]";
vcm600.loopActive = [];

vcm600.init = function (id, debugging) {
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 1; i <= 90; i++) {
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 40; i <= 90; i++) {
    //         sleepFor(2);
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x7F);
    //     }
    // }
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 40; i <= 90; i++) {
    //         sleepFor(2);
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }
    // for (var i = 40; i <= 90; i++) {
    //     for (var ii = 0; ii <= 13; ii++) {
    //         sleepFor(6);
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x7F);
    //     }
    // }
    // for (var i = 90; i > 40; i--) {
    //     for (var ii = 0; ii <= 13; ii++) {
    //
    //         sleepFor(6);
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }
    // for (var i = 40; i <= 90; i++) {
    //     for (var ii = 13; ii >= 0; ii--) {
    //         if (i % 2 == 0) {
    //             midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x7F);
    //         }
    //     }
    // }
    // sleepFor(4);
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 40; i <= 90; i++) {
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }
    // for (var i = 40; i <= 90; i++) {
    //     for (var ii = 13; ii >= 0; ii--) {
    //         if (i % 2 != 0) {
    //             midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x7F);
    //         }
    //     }
    // }
    // sleepFor(4);
    //
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 1; i <= 90; i++) {
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }
    // for (var i = 40; i <= 90; i++) {
    //     for (var ii = 13; ii >= 0; ii--) {
    //         if (i % 2 == 0) {
    //             midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x7F);
    //         }
    //     }
    // }
    // sleepFor(4);
    //
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 40; i <= 90; i++) {
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }
    // for (var i = 40; i <= 90; i++) {
    //     for (var ii = 13; ii >= 0; ii--) {
    //         if (i % 2 != 0) {
    //             midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x7F);
    //         }
    //     }
    // }
    // sleepFor(4);
    //
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 1; i <= 90; i++) {
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }

    // for (var i = 40; i <= 90; i++) {
    //     for (var ii = 13; ii >= 0; ii--) {
    //         if (i % 2 != 0) {
    //             midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x7F);
    //         }
    //     }
    // }
    // sleepFor(4);
    //
    // for (var ii = 0; ii <= 13; ii++) {
    //     for (var i = 1; i <= 90; i++) {
    //         midi.sendShortMsg("0x9" + (ii).toString(16), i, 0x00);
    //     }
    // }

}
vcm600.shutdown = function () {
    for (var i = 1; i <= 90; i++) {
        midi.sendShortMsg(0x90, i, 0x00);
    }
}

vcm600.enableEffect1 = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1_Effect1]", "enabled");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1_Effect1]", "enabled", 1);
            midi.sendShortMsg("0x9C", 0x4E, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1_Effect1]", "enabled", 0);
            midi.sendShortMsg("0x9C", 0x4E, 0x00);
        }
    }
}
vcm600.enableEffect2 = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1_Effect2]", "enabled");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1_Effect2]", "enabled", 1);
            midi.sendShortMsg("0x9C", 0x4F, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1_Effect2]", "enabled", 0);
            midi.sendShortMsg("0x9C", 0x4F, 0x00);
        }
    }
}
vcm600.enableEffect3 = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1_Effect3]", "enabled");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1_Effect3]", "enabled", 1);
            midi.sendShortMsg("0x9C", 0x50, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1_Effect3]", "enabled", 0);
            midi.sendShortMsg("0x9C", 0x50, 0x00);
        }
    }
}
vcm600.enableEffectRack = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1]", "enabled");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1]", "enabled", 1);
            midi.sendShortMsg("0x9C", 0x51, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1]", "enabled", 0);
            midi.sendShortMsg("0x9C", 0x51, 0x00);
        }
    }
}
vcm600.channelOneEffectEnabled = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1]", "group_[Channel1]_enable");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel1]_enable", 1);
            midi.sendShortMsg("0x9C", 0x4A, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel1]_enable", 0);
            midi.sendShortMsg("0x9C", 0x4A, 0x00);
        }
    }
}
vcm600.channelTwoEffectEnabled = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1]", "group_[Channel2]_enable");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel2]_enable", 1);
            midi.sendShortMsg("0x9C", 0x4B, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel2]_enable", 0);
            midi.sendShortMsg("0x9C", 0x4B, 0x00);
        }
    }
}
vcm600.channelThreeEffectEnabled = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1]", "group_[Channel3]_enable");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel3]_enable", 1);
            midi.sendShortMsg("0x9C", 0x4C, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel3]_enable", 0);
            midi.sendShortMsg("0x9C", 0x4C, 0x00);
        }
    }
}
vcm600.channelFourEffectEnabled = function (channel, control, value, status, group) {
    var curValue = engine.getValue("[EffectRack1_EffectUnit1]", "group_[Channel4]_enable");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel4]_enable", 1);
            midi.sendShortMsg("0x9C", 0x4D, 0x7F);
        } else {
            engine.setValue("[EffectRack1_EffectUnit1]", "group_[Channel4]_enable", 0);
            midi.sendShortMsg("0x9C", 0x4D, 0x00);
        }
    }
}
vcm600.killLow = function (channel, control, value, status, group) {
    var curValue = engine.getValue(group, "button_parameter1");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue(group, "button_parameter1", 1);
            midi.sendShortMsg("0x" + (90 + channel), 0x3E, 0x7F);
        } else {
            engine.setValue(group, "pfl", 0);
            engine.setValue(group, "button_parameter1", 0);
            midi.sendShortMsg("0x" + (90 + channel), 0x3E, 0x00);
        }
    }
}
vcm600.pfl = function (channel, control, value, status, group) {
    var curValue = engine.getValue(group, "pfl");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue(group, "pfl", 1);
            midi.sendShortMsg("0x" + (90 + channel), 0x40, 0x7F);

        } else {
            engine.setValue(group, "pfl", 0);
            midi.sendShortMsg("0x" + (90 + channel), 0x40, 0x00);
        }
    }
}
vcm600.toggleLoop = function (channel, control, value, status, group) {
    var curValue = vcm600.loopActive[group];
    if (value == 127) {
        if (curValue == undefined || curValue == 0) {
            // engine.setValue(group, "beatloop_4_toggle", 1);
            engine.setValue(group, "beatloop_activate", 1);
            engine.setValue(group, "beatloop_" + engine.getValue(group, "beatloop_size") + "_toggle", 1);
            midi.sendShortMsg("0x" + (90 + channel), 0x41, 0x7F);
            vcm600.loopActive[group] = 1;
        } else {
            engine.setValue(group, "beatloop_activate", 0);
            engine.setValue(group, "beatloop_" + engine.getValue(group, "beatloop_size") + "_toggle", 1);
            vcm600.loopActive[group] = 0;
            midi.sendShortMsg("0x" + (90 + channel), 0x41, 0x00);
        }
    }
}
vcm600.skipBeat = function (channel, control, value, status, group) {
    var action = "beatjump_1_forward";
    if (value == 127) {
        engine.setValue(group, action, 1);
    }
}
vcm600.play = function (channel, control, value, status, group) {
    var curValue = engine.getValue(group, "play");
    if (value == 127) {
        if (curValue == 0) {
            engine.setValue(group, "play", 1);
            midi.sendShortMsg("0x" + (90 + channel), 0x45, 0x7F);
        } else {
            engine.setValue(group, "play", 0);
            midi.sendShortMsg("0x" + (90 + channel), 0x45, 0x00);
        }
    }
}
vcm600.breakDeck = function (channel, control, value, status, group) {
    if (vcm600.selectedGroup != "[Library]") {
        if (value == 127) {
            engine.setValue(vcm600.selectedGroup, "rate_temp_down", 1);
        } else {
            engine.setValue(vcm600.selectedGroup, "rate_temp_down", 0);

        }
    }
}
vcm600.accelerateDeck = function (channel, control, value, status, group) {
    if (vcm600.selectedGroup != "[Library]") {
        if (value == 127) {
            engine.setValue(vcm600.selectedGroup, "rate_temp_up", 1);
        } else {
            engine.setValue(vcm600.selectedGroup, "rate_temp_up", 0);
        }
    }
}
vcm600.accelerateDeck = function (channel, control, value, status, group) {
    if (vcm600.selectedGroup != "[Library]") {
        if (value == 127) {
            engine.setValue(vcm600.selectedGroup, "rate_temp_up", 1);
        } else {
            engine.setValue(vcm600.selectedGroup, "rate_temp_up", 0);
        }
    }
}
vcm600.loadSelected = function (channel, control, value, status, group) {
    vcm600.selectedGroup = group;
    midi.sendShortMsg("0x" + (92), 0x3F, 0x00);
    midi.sendShortMsg("0x" + (93), 0x3F, 0x00);
    midi.sendShortMsg("0x" + (94), 0x3F, 0x00);
    midi.sendShortMsg("0x" + (95), 0x3F, 0x00);
    midi.sendShortMsg("0x" + (90 + channel), 0x3F, 0x7F);
    engine.setValue(group, "LoadSelectedTrack", value);
    engine.setValue(group, "sync_enabled", true);
    engine.setValue(group, "sync_enabled", false);
    engine.setValue("[Master]", "maximize_library", 0);
}
vcm600.openLib = function (channel, control, value, status, group) {
    if (value == 127) {
        if (vcm600.selectedGroup != "[Library]") {
            vcm600.selectedGroupBeforeLib = vcm600.selectedGroup;
            vcm600.selectedGroup = "[Library]";
            engine.setValue("[Master]", "maximize_library", 1);
        } else {
            engine.setValue("[Master]", "maximize_library", 0);
            vcm600.selectedGroup = vcm600.selectedGroupBeforeLib;
        }
    }
}
vcm600.prv = function (channel, control, value, status, group) {
    var action = "beatjump_4_backward";
    if (value == 127) {
        if (vcm600.selectedGroup == "[Library]") {
            action = "MoveUp";
        }
        engine.setValue(vcm600.selectedGroup, action, 1);
    }
}
vcm600.fwd = function (channel, control, value, status, group) {
    var action = "beatjump_4_forward";
    if (value == 127) {
        if (vcm600.selectedGroup == "[Library]") {
            action = "MoveDown";
        }
        engine.setValue(vcm600.selectedGroup, action, 1);
    }
}
sleepFor = function (sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */
    }
}
