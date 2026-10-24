import { Schema, models, model, Model } from "mongoose";

const projectSchema = new Schema({
  title: { type: String, required: true, trim: true, maxlength: 80 },
  description: { type: String, required: true, trim: true, maxlength: 500 },
  tags: { type: [String], default: [] },
  liveUrl: { type: String, default: "" },
  codeUrl: { type: String, default: "" },
  order: { type: Number, default: 0 },
}, { timestamps: true });
projectSchema.index({ order: 1, createdAt: -1 });

const messageSchema = new Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
}, { timestamps: true });
messageSchema.index({ createdAt: -1 });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Project = (models.Project as Model<any>) || model("Project", projectSchema);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Message = (models.Message as Model<any>) || model("Message", messageSchema);
