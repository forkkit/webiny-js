// @flow
import React from "react";
import type { SiteBuilderBlockCategoryPluginType } from "webiny-app-site-builder/types";
import { ReactComponent as GeneralIcon } from "./icons/round-gesture-24px.svg";
import { ReactComponent as CtaIcon } from "./icons/round-notifications_active-24px.svg";
import { ReactComponent as ContentIcon } from "./icons/round-view_quilt-24px.svg";
import { ReactComponent as FeaturesIcon } from "./icons/round-stars-24px.svg";
import { ReactComponent as HeaderIcon } from "./icons/round-home-24px.svg";
import { ReactComponent as TeamIcon } from "./icons/round-group_work-24px.svg";
import { ReactComponent as TestimonialIcon } from "./icons/round-record_voice_over-24px.svg";

export default ([
    {
        type: "sb-block-category",
        name: "sb-block-category-cta",
        id: "cta",
        title: "Call To Action",
        description: "Call to action blocks.",
        icon: <CtaIcon />
    },
    {
        type: "sb-block-category",
        name: "sb-block-category-content",
        id: "content",
        title: "Content",
        description: "Pre-formatted content blocks.",
        icon: <ContentIcon />
    },
    {
        type: "sb-block-category",
        name: "sb-block-category-features",
        id: "features",
        title: "Features",
        description: "Blocks for listing features and benefits.",
        icon: <FeaturesIcon />
    },
    {
        type: "sb-block-category",
        name: "sb-block-category-general",
        id: "general",
        title: "General",
        description: "List of general purpose blocks.",
        icon: <GeneralIcon />
    },
    {
        type: "sb-block-category",
        name: "sb-block-category-header",
        id: "header",
        title: "Headers",
        description: "Page headers.",
        icon: <HeaderIcon />
    },
    {
        type: "sb-block-category",
        name: "sb-block-category-team",
        id: "team",
        title: "Team",
        description: "Blocks to list out your team members.",
        icon: <TeamIcon />
    },
    {
        type: "sb-block-category",
        name: "sb-block-category-testimonial",
        id: "testimonial",
        title: "Testimonial",
        description: "Display comments and user feedback.",
        icon: <TestimonialIcon />
    }
]: Array<SiteBuilderBlockCategoryPluginType>);
