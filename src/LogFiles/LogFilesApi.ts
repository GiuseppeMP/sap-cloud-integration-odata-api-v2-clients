/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LogFiles } from './LogFiles';
import { LogFilesRequestBuilder } from './LogFilesRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class LogFilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LogFiles<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LogFilesApi<DeSerializersT> {
    return new LogFilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LogFiles;

  requestBuilder(): LogFilesRequestBuilder<DeSerializersT> {
    return new LogFilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<LogFiles<DeSerializersT>, DeSerializersT> {
    return entityBuilder<LogFiles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LogFiles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LogFiles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LogFiles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      LogFiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICATION: OrderableEdmTypeField<
      LogFiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED: OrderableEdmTypeField<
      LogFiles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CONTENT_TYPE: OrderableEdmTypeField<
      LogFiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_FILE_TYPE: OrderableEdmTypeField<
      LogFiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NODE_SCOPE: OrderableEdmTypeField<
      LogFiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      LogFiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LogFiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link application} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION: fieldBuilder.buildEdmTypeField(
          'Application',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED: fieldBuilder.buildEdmTypeField(
          'LastModified',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link contentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ContentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logFileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'LogFileType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nodeScope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NODE_SCOPE: fieldBuilder.buildEdmTypeField(
          'NodeScope',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.Int64', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LogFiles)
      };
    }

    return this._schema;
  }
}
