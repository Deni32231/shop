import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "../../types/models";
import axios from "../../utils/axios";

interface CategoryState {
  categories: ICategory[];
  isLoading: boolean;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: "",
};
