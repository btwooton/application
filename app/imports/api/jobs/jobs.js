import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import 'uniforms';

/** Create the Jobs Meteor collection. */
const Jobs = new Mongo.Collection('Jobs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const JobSchema = new SimpleSchema({
    title: String,
    description: String,
    open: { type: Number, allowedValues: [2, 1, 0, -1] },
    location: String,
    pay: Number,
    postDate: Date,
    skills: Array,
    employerId: String,
    employeeId: { type: String, optional: true, uniforms: { type: 'hidden' } },
    categoryId: String,
    ratingId: { type: String, optional: true, uniforms: { type: 'hidden' } },
    employerSubmitRating: { type: Boolean, defaultValue: false },
    employeeSubmitRating: { type: Boolean, defaultValue: false },
  'skills.$': String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Jobs.attachSchema(JobSchema);

/** Make the collection and schema available to other code. */
export { Jobs, JobSchema };
